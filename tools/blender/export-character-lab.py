"""Export edited character-lab.blend, including every hidden variant."""
import bpy,os
root=bpy.data.objects['worker_root']
for item in [root,*root.children_recursive]:
 item.hide_set(False);item.hide_render=False
bpy.ops.object.select_all(action='DESELECT')
for item in [root,*root.children_recursive]:item.select_set(True)
bpy.context.view_layer.objects.active=root
path=os.path.abspath(os.path.join(os.path.dirname(__file__),'../../src/character-lab/assets/worker-lab.glb'))
bpy.ops.export_scene.gltf(filepath=path,export_format='GLB',use_selection=True,export_yup=True,export_apply=True,export_cameras=False,export_lights=False)
