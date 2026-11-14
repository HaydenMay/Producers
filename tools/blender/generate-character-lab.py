"""Create the modular, standing character used by the design lab (Blender 5.2)."""
import bpy, math, os
from mathutils import Vector
from collections import defaultdict
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
for m in list(bpy.data.materials):bpy.data.materials.remove(m)
def material(name,color):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=.8
 return m
M={n:material(n,c) for n,c in [('skin',(.68,.40,.27)),('shirt',(.55,.10,.09)),('pants',(.13,.20,.29)),('hair',(.08,.055,.04)),('face',(.03,.024,.022)),('shoe',(.10,.09,.09)),('glasses',(.025,.025,.025))]}
def xyz(p):return (p[0],-p[2],p[1])
def empty(name,parent=None,pos=(0,0,0)):
 o=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(o);o.parent=parent;o.location=xyz(pos);return o
def box(name,parent,mat,pos,size,bevel=.035):
 bpy.ops.mesh.primitive_cube_add(size=1);o=bpy.context.object;o.name=name;o.parent=parent;o.location=xyz(pos);o.dimensions=(size[0],size[2],size[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 if bevel:
  mod=o.modifiers.new('Soft corners','BEVEL');mod.width=bevel;mod.segments=2;bpy.ops.object.modifier_apply(modifier=mod.name)
  mod=o.modifiers.new('Weighted normals','WEIGHTED_NORMAL');bpy.ops.object.modifier_apply(modifier=mod.name)
 o.data.materials.append(M[mat]);return o
root=empty('worker_root')
# Short toy-like legs remain separate for future articulation.
for x,name in [(-.18,'leg_l_pivot'),(.18,'leg_r_pivot')]:
 leg=empty(name,root,(x,.66,0))
 box('trouser',leg,'pants',(0,-.25,0),(.29,.50,.33),.055)
 box('shoe',leg,'shoe',(0,-.575,.07),(.32,.17,.45),.045)
box('hips',root,'pants',(0,.70,0),(.64,.25,.38),.06)
box('shirt_body',root,'shirt',(0,1.05,0),(.72,.70,.43),.07)
box('neck',root,'skin',(0,1.42,0),(.25,.18,.25),.025)
# Natural relaxed arms: shoulders and elbows can later be rigged.
for x,name in [(-.41,'arm_l_pivot'),(.41,'arm_r_pivot')]:
 arm=empty(name,root,(x,1.27,0))
 box('sleeve',arm,'shirt',(0,-.15,0),(.23,.33,.34),.055)
 box('forearm',arm,'skin',(0,-.41,.025),(.18,.25,.22),.045)
 box('hand',arm,'skin',(0,-.56,.065),(.20,.18,.23),.055)
head=empty('head_pivot',root,(0,1.80,0))
box('head',head,'skin',(0,0,0),(.78,.78,.67),.075)
for x in [-.42,.42]:box('ear',head,'skin',(x,-.035,0),(.13,.22,.16),.04)
# Eyes and eyebrows are deliberately large enough to survive the distant view.
for x in [-.145,.145]:
 box('eye',head,'face',(x,.045,.342),(.075,.135,.018),.012)
 box('eyebrow',head,'hair',(x,.18,.35),(.16,.045,.025),.01)
box('nose',head,'skin',(0,-.08,.35),(.105,.095,.10),.025)
box('smile',head,'face',(0,-.205,.342),(.15,.024,.02),.007)
# Each group is an alternate silhouette, not a different baked character.
def scalp_wrap(parent, long_hair=False):
 # The head half-width is .39; keep the visible shell outside it while the
 # ears (outer edge .485) remain in front of the hair. Connect top, temples,
 # and the back so no scalp strip appears when the worker turns.
 back_y=-.05 if long_hair else .08
 back_height=.76 if long_hair else .54
 box('hair_back_wrap',parent,'hair',(0,back_y,-.335),(.84,back_height,.10),.025)
 for side in [-1,1]:
  x=side*.41
  side_y=-.05 if long_hair else .10
  side_height=.76 if long_hair else .46
  box('hair_side_wrap',parent,'hair',(x,side_y,-.005),(.075,side_height,.64),.022)
short=empty('hair_short',head)
box('short_cap',short,'hair',(0,.34,-.035),(.88,.18,.76),.055)
scalp_wrap(short)
for x,h in [(-.25,.15),(-.08,.21),(.10,.19),(.27,.13)]:box('short_tuft',short,'hair',(x,.44+h/2,.24),(.19,h,.22),.04)
swept=empty('hair_swept',head)
box('swept_cap',swept,'hair',(0,.36,-.03),(.88,.22,.76),.065)
scalp_wrap(swept)
box('swept_fringe',swept,'hair',(-.06,.33,.29),(.66,.20,.18),.055)
box('swept_quiff',swept,'hair',(-.18,.49,.16),(.46,.19,.35),.06)
curls=empty('hair_curls',head)
box('curl_base',curls,'hair',(0,.34,-.02),(.88,.17,.76),.055)
scalp_wrap(curls)
for x in [-.29,-.10,.10,.29]:
 for z in [-.18,.03,.24]:
  height=.17+(0.04 if (x+z)>0 else 0)
  box('curl',curls,'hair',(x,.45,z),(.23,height,.23),.06)
long=empty('hair_long',head)
box('long_cap',long,'hair',(0,.36,-.01),(.90,.21,.76),.065)
scalp_wrap(long,True)
box('long_fringe',long,'hair',(-.08,.30,.28),(.61,.18,.18),.045)
# Build each facial-hair silhouette as one extruded union, with shared edges
# and the same depth. The full beard includes the standalone moustache.
def facial_mesh(name,parent,rects):
 xs=sorted({v for x0,x1,y0,y1 in rects for v in (x0,x1)})
 ys=sorted({v for x0,x1,y0,y1 in rects for v in (y0,y1)})
 cells={(i,j) for i in range(len(xs)-1) for j in range(len(ys)-1)
        if any(x0<(xs[i]+xs[i+1])/2<x1 and y0<(ys[j]+ys[j+1])/2<y1 for x0,x1,y0,y1 in rects)}
 vertices=[];faces=[];indices={}
 def v(i,j,front):
  key=(i,j,front)
  if key not in indices:
   indices[key]=len(vertices);vertices.append(xyz((xs[i],ys[j],.38 if front else .315)))
  return indices[key]
 for i,j in sorted(cells):
  faces.append([v(i,j,True),v(i+1,j,True),v(i+1,j+1,True),v(i,j+1,True)])
  faces.append([v(i,j+1,False),v(i+1,j+1,False),v(i+1,j,False),v(i,j,False)])
  if (i,j-1) not in cells:faces.append([v(i,j,True),v(i,j,False),v(i+1,j,False),v(i+1,j,True)])
  if (i,j+1) not in cells:faces.append([v(i+1,j+1,True),v(i+1,j+1,False),v(i,j+1,False),v(i,j+1,True)])
  if (i-1,j) not in cells:faces.append([v(i,j+1,True),v(i,j+1,False),v(i,j,False),v(i,j,True)])
  if (i+1,j) not in cells:faces.append([v(i+1,j,True),v(i+1,j,False),v(i+1,j+1,False),v(i+1,j+1,True)])
 mesh=bpy.data.meshes.new(name);mesh.from_pydata(vertices,[],faces);mesh.update()
 obj=bpy.data.objects.new(name,mesh);bpy.context.collection.objects.link(obj);obj.parent=parent;obj.data.materials.append(M['hair'])
 bpy.ops.object.select_all(action='DESELECT');obj.select_set(True);bpy.context.view_layer.objects.active=obj
 mod=obj.modifiers.new('Soft edges','BEVEL');mod.width=.005;mod.segments=2;mod.limit_method='ANGLE';bpy.ops.object.modifier_apply(modifier=mod.name)
 return obj
mustache=[(-.14,.14,-.1775,-.1225)]
moustache=empty('facial_moustache',head)
facial_mesh('moustache',moustache,mustache)
goatee=empty('facial_goatee',head)
facial_mesh('goatee',goatee,mustache+[(-.18,.18,-.35,-.25),(-.18,-.10,-.26,-.15),(.10,.18,-.26,-.15)])
beard=empty('facial_beard',head)
facial_mesh('beard',beard,mustache+[(-.25,.25,-.1775,-.1225),(-.32,-.22,-.34,-.075),(.22,.32,-.34,-.075),(-.32,.32,-.38,-.235),(-.25,-.08,-.24,-.17),(.08,.25,-.24,-.17)])
glasses=empty('glasses_square',head)
for x in [-.145,.145]:
 for y in [-.035,.12]:box('frame',glasses,'glasses',(x,y,.37),(.225,.028,.035),.006)
 for dx in [-.10,.10]:box('frame',glasses,'glasses',(x+dx,.043,.37),(.028,.17,.035),.006)
box('bridge',glasses,'glasses',(0,.055,.37),(.085,.03,.035),.005)
# Combine static parts by pivot and material to keep draw calls predictable.
groups=defaultdict(list)
for o in list(bpy.context.scene.objects):
 if o.type=='MESH':groups[(o.parent,o.data.materials[0].name)].append(o)
for (parent,mat),objects in groups.items():
 if len(objects)>1:
  bpy.ops.object.select_all(action='DESELECT')
  for o in objects:o.select_set(True)
  bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.join()
 objects[0].name=parent.name+'_'+mat
# Export all named groups. Visibility is selected per person at runtime.
bpy.ops.object.select_all(action='SELECT');bpy.context.view_layer.objects.active=root
bpy.ops.export_scene.gltf(filepath=os.path.join(ROOT,'src/character-lab/assets/worker-lab.glb'),export_format='GLB',use_selection=True,export_yup=True,export_apply=True,export_cameras=False,export_lights=False)
# Set a clean, readable default for opening the editable source and rendering its preview.
for part in [short,curls,long,moustache,goatee,glasses]:
 part.hide_render=True;part.hide_set(True)
 for child in part.children_recursive:child.hide_render=True;child.hide_set(True)
bpy.ops.object.camera_add(location=(3,-6,3.1));camera=bpy.context.object;camera.name='preview_camera';camera.rotation_euler=(Vector((0,0,1.2))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=3.1;bpy.context.scene.camera=camera
for pos,energy,size in [((3,-5,6),650,4),((-4,-2,3),380,4)]:
 bpy.ops.object.light_add(type='AREA',location=pos);o=bpy.context.object;o.data.energy=energy;o.data.size=size;o.rotation_euler=(Vector((0,0,1.2))-o.location).to_track_quat('-Z','Y').to_euler()
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=32;scene.world.color=(.35,.30,.27);scene.render.resolution_x=800;scene.render.resolution_y=800;scene.render.resolution_percentage=100;scene.render.image_settings.file_format='PNG';scene.render.filepath=os.path.join(ROOT,'docs/visual-reviews/character-lab/blender-preview.png')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets/blender/character-lab.blend'))
bpy.ops.render.render(write_still=True)
