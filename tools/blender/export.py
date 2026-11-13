"""Export edited studio_assets.blend without regenerating its geometry."""
import bpy, os
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'../..'))
for name,filename in [('desk_root','workstation.glb'),('worker_root','worker.glb')]:
    root=bpy.data.objects[name]
    original=root.location.copy()
    root.location=(0,0,0)  # the saved file positions the worker for the preview render
    bpy.ops.object.select_all(action='DESELECT')
    def select(object):
        object.select_set(True)
        for child in object.children: select(child)
    select(root)
    bpy.context.view_layer.objects.active=root
    bpy.ops.export_scene.gltf(filepath=os.path.join(ROOT,'src/game/assets',filename),export_format='GLB',use_selection=True,export_yup=True,export_apply=True,export_cameras=False,export_lights=False)
    root.location=original
