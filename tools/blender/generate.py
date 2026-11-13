"""Generate original Producers workstation and worker. Run Blender --background --python tools/blender/generate.py."""
import bpy, math, os
from mathutils import Vector
from collections import defaultdict
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
for m in list(bpy.data.materials): bpy.data.materials.remove(m)

def mat(name, color, metallic=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*color,1); p.inputs['Roughness'].default_value=.75; p.inputs['Metallic'].default_value=metallic
    return m
M={n:mat(n,c,metal) for n,c,metal in [
 ('wood',(.43,.20,.105),0),('wood_light',(.49,.24,.12),0),('wood_edge',(.30,.13,.075),0),('brass',(.67,.42,.16),.35),('iron',(.075,.10,.11),.1),('screen',(.12,.27,.29),0),('screen_glow',(.29,.55,.53),0),('paper',(.89,.78,.59),0),('keys',(.66,.61,.52),0),('chair',(.17,.32,.31),0),('chair_light',(.27,.44,.40),0),('lamp',(.16,.23,.20),0),('bulb',(1,.71,.32),0),('mug',(.70,.27,.19),0),
 ('shirt',(.55,.28,.25),0),('pants',(.22,.25,.28),0),('skin',(.70,.43,.31),0),('hair',(.18,.10,.07),0),('face',(.065,.05,.045),0),('blush',(.70,.30,.25),0)]}
def coord(p): return (p[0],-p[2],p[1])
def empty(name, parent=None, pos=(0,0,0)):
    o=bpy.data.objects.new(name,None); bpy.context.collection.objects.link(o); o.parent=parent; o.location=coord(pos); return o

def box(name,parent,material,pos,size,bevel=.035):
    bpy.ops.mesh.primitive_cube_add(size=1); o=bpy.context.object; o.name=name; o.parent=parent; o.location=coord(pos); o.dimensions=(size[0],size[2],size[1]); bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        mod=o.modifiers.new('Soft crafted edges','BEVEL');mod.width=bevel;mod.segments=2; bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=mod.name)
        mod=o.modifiers.new('Weighted corners','WEIGHTED_NORMAL'); bpy.ops.object.modifier_apply(modifier=mod.name)
    o.data.materials.append(M[material]); return o

def sphere(name,parent,material,pos,size):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=12,ring_count=6);o=bpy.context.object;o.name=name;o.parent=parent;o.location=coord(pos);o.scale=(size[0],size[2],size[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(M[material]);return o

def cyl(name,parent,material,pos,radius,depth,verts=12):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts,radius=radius,depth=depth);o=bpy.context.object;o.name=name;o.parent=parent;o.location=coord(pos);o.data.materials.append(M[material]);return o

desk=empty('desk_root'); chair=empty('chair_root',desk)
# Desktop, chamfered apron, recessed twin drawers and slim legs.
box('desktop',desk,'wood_light',(0,.94,0),(2.22,.14,1.25),.055)
box('apron',desk,'wood',(0,.81,0),(2.12,.12,1.14),.035)
for x in [-.91,.91]:
    for z in [-.46,.46]: box('tapered_leg',desk,'wood_edge',(x,.39,z),(.14,.78,.14),.035)
box('drawer_cabinet',desk,'wood',(-.72,.57,-.04),(.43,.48,1.02),.035)
for y in [.49,.70]:
    box('drawer_front',desk,'wood_light',(-.72,y,.49),(.39,.17,.035),.012)
    box('drawer_pull',desk,'brass',(-.72,y,.515),(.16,.025,.025),.008)
# Monitor back, slender stand and visual screen surface.
box('monitor_foot',desk,'iron',(-.18,1.035,-.31),(.54,.045,.24),.025)
box('monitor_stem',desk,'iron',(-.18,1.22,-.34),(.075,.38,.07),.02)
box('monitor_shell',desk,'iron',(-.18,1.49,-.34),(1.0,.61,.10),.055)
box('monitor_badge',desk,'brass',(-.18,1.50,-.394),(.20,.10,.012),.012)
box('monitor_glass',desk,'screen',(-.18,1.49,-.282),(.87,.48,.018),.016)
for i,w in enumerate([.52,.34,.61]): box('screen_line',desk,'screen_glow',(-.25+(w-.5)/2,1.58-i*.085,-.269),(w,.018,.008),.002)
# Keyboard and warm desk accessories.
box('keyboard',desk,'paper',(-.16,1.04,.28),(.82,.055,.25),.024)
for x in range(9):
 for z in range(2): box('key',desk,'keys',(-.49+x*.082,1.073,.235+z*.075),(.055,.012,.045),.004)
box('notebook',desk,'paper',(.58,1.035,.29),(.34,.035,.25),.012)
box('notebook_band',desk,'screen',(.58,1.056,.29),(.04,.008,.25),.002)
cyl('cup',desk,'mug',(-.88,1.10,.25),.085,.15); cyl('coffee',desk,'wood_edge',(-.88,1.179,.25),.062,.01)
# Angled-shade lamp silhouette with brass stem.
cyl('lamp_base',desk,'iron',(.87,1.025,-.37),.14,.05)
cyl('lamp_stem',desk,'brass',(.87,1.23,-.37),.025,.40)
bpy.ops.mesh.primitive_cone_add(vertices=12,radius1=.19,radius2=.095,depth=.16);o=bpy.context.object;o.name='lamp_shade';o.parent=desk;o.location=coord((.87,1.44,-.37));o.data.materials.append(M['lamp'])
sphere('lamp_glow',desk,'bulb',(.87,1.35,-.37),(.09,.035,.09))
# Upholstered chair, shaped back and four splayed feet.
box('seat',chair,'chair',(0,.56,1.24),(.82,.18,.75),.08)
box('seat_cushion',chair,'chair_light',(0,.665,1.20),(.72,.09,.59),.045)
box('chair_back',chair,'chair',(0,.98,1.58),(.82,.75,.16),.075)
box('back_cushion',chair,'chair_light',(0,1.02,1.48),(.67,.56,.07),.04)
cyl('chair_post',chair,'iron',(0,.31,1.25),.07,.45)
for x,z,sx,sz in [(-.23,1.25,.46,.08),(.23,1.25,.46,.08),(0,1.02,.08,.46),(0,1.48,.08,.46)]: box('chair_foot',chair,'iron',(x,.09,z),(sx,.07,sz),.025)
# Worker at origin beneath chair. Distinct pivots remain in exported hierarchy.
worker=empty('worker_root')
box('hips',worker,'pants',(0,.69,0),(.59,.27,.43),.08)
for x in [-.18,.18]:
 box('thigh',worker,'pants',(x,.55,-.20),(.25,.22,.48),.065)
 box('shoe',worker,'face',(x,.35,-.44),(.25,.14,.34),.045)
box('torso',worker,'shirt',(0,1.04,0),(.65,.66,.39),.075)
box('collar',worker,'paper',(0,1.34,-.205),(.24,.08,.025),.01)
head=empty('head_pivot',worker,(0,1.59,0))
box('head',head,'skin',(0,0,0),(.61,.65,.54),.09)
box('hair_cap',head,'hair',(0,.25,.03),(.64,.22,.57),.07)
box('hair_back',head,'hair',(0,.05,.22),(.61,.39,.14),.04)
box('hair_quiff',head,'hair',(-.16,.23,-.20),(.29,.20,.18),.05)
swept=empty('hair_swept',head)
box('swept_fringe',swept,'hair',(.14,.19,-.245),(.30,.16,.12),.045)
box('swept_side',swept,'hair',(.27,.02,.10),(.11,.32,.26),.035)
for x in [-.30,.30]: sphere('ear',head,'skin',(x,-.02,0),(.065,.09,.07))
for x in [-.12,.12]:
 sphere('eye',head,'face',(x,.015,-.276),(.035,.045,.018))
 box('brow',head,'hair',(x,.12,-.275),(.11,.025,.018),.006)
sphere('nose',head,'skin',(0,-.065,-.291),(.065,.055,.04))
box('smile',head,'face',(0,-.17,-.277),(.12,.018,.012),.004)
for x,name in [(-.39,'arm_l_pivot'),(.39,'arm_r_pivot')]:
 arm=empty(name,worker,(x,1.20,0))
 box('sleeve',arm,'shirt',(0,-.10,-.06),(.21,.30,.24),.05)
 box('forearm',arm,'shirt',(0,-.14,-.30),(.17,.16,.47),.04)
 sphere('hand',arm,'skin',(0,-.14,-.55),(.09,.07,.10))
# Batch static pieces by parent and material: fewer draw calls, while pivots stay independent.
groups=defaultdict(list)
for o in list(bpy.context.scene.objects):
 if o.type=='MESH': groups[(o.parent,o.data.materials[0].name)].append(o)
for (parent,material), objects in groups.items():
 bpy.ops.object.select_all(action='DESELECT')
 for o in objects:o.select_set(True)
 bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.join();objects[0].name=parent.name+'_'+material

def export(root,path):
 bpy.ops.object.select_all(action='DESELECT')
 def select(o):
  o.select_set(True)
  for child in o.children: select(child)
 select(root);bpy.context.view_layer.objects.active=root
 bpy.ops.export_scene.gltf(filepath=path,export_format='GLB',use_selection=True,export_yup=True,export_apply=True,export_cameras=False,export_lights=False)
export(desk,os.path.join(ROOT,'src/game/assets/workstation.glb'))
export(worker,os.path.join(ROOT,'src/game/assets/worker.glb'))
# Preview composition in the saved editable source. Worker export remains at the origin.
worker.location=coord((0,0,1.15))
bpy.ops.object.camera_add(location=(5.8,-8,6.5));camera=bpy.context.object;camera.name='preview_camera';camera.rotation_euler=(Vector((0,0,1))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=4.8;bpy.context.scene.camera=camera
for name,loc,power,size in [('key',(2,-4,7),850,5),('fill',(-4,-1,4),450,4)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,1))-o.location).to_track_quat('-Z','Y').to_euler()
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=32;scene.world.color=(.32,.28,.24);scene.render.resolution_x=900;scene.render.resolution_y=900;scene.render.resolution_percentage=100;scene.render.image_settings.file_format='PNG';scene.render.filepath=os.path.join(ROOT,'docs/visual-reviews/v05/blender-preview.png')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets/blender/studio_assets.blend'))
bpy.ops.render.render(write_still=True)
