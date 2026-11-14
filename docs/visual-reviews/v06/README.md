# Producers V0.6 composition study

All camera studies use the same original environment, character arrangement and 390 × 844 viewport, with reduced motion for a stable comparison. Desktop counterparts are also included. The coordinates describe the pre-selection study camera, which aimed at `(0, 0.7, 0)` from a horizontal distance of 15 units.

| Option | Camera | Visual assessment | Screenshots |
| --- | --- | --- | --- |
| Baseline | Height 15, yaw 35°, zoom 1.00 | The entire room reads, but the high angle emphasizes rooftops and the office feels detached. | [Phone](baseline-phone.png) · [Desktop](baseline-desktop.png) |
| A | Height 12, yaw 35°, zoom 1.10 | More approachable while retaining the layout, but still somewhat top-down. | [Phone](camera-a-phone.png) · [Desktop](camera-a-desktop.png) |
| B | Height 10, yaw 35°, zoom 1.15 | Faces and walls become more prominent while desks remain distinguishable; the stronger zoom crops room edges on a phone. | [Phone](camera-b-phone.png) · [Desktop](camera-b-desktop.png) |
| C | Height 8, yaw 35°, zoom 1.20 | Most intimate, but the desks overlap more and the phone framing crops too much. | [Phone](camera-c-phone.png) · [Desktop](camera-c-desktop.png) |
| D | Height 9, yaw 48°, zoom 1.15 | An attractive view of the brick sign wall, but the oblique angle compresses the desk layout and crops edges. | [Phone](camera-d-phone.png) · [Desktop](camera-d-desktop.png) |

**Chosen:** the B family, adjusted to the equivalent of height 9.5 at horizontal distance 15 and a gentler approximately 1.04× phone framing relative to the original. Desktop framing is slightly wider than the original so the wall tops remain visible. It lowers the viewing elevation from about 44° to 30° while leaving more room at the sides. The actual orthographic camera is placed twice as far away at the same angle so the ground remains visible at the bottom of tall phone screens. The horizontal angle slider remains functional.

The first exterior pass removed the repetitive buildings and palms; later passes refined the building silhouettes, moved the rounded window foliage above the mullion, fixed ground clipping at the bottom of portrait screens, adjusted the framing trees and gave desktop views more headroom. [First exterior pass](exterior-pass1-phone.png) · [Final phone](final-phone.png) · [Final desktop](final-desktop.png) · [Alternate angle](final-angle-phone.png) · [Night](final-night-phone.png) · [Six desks](stress-six-desks-default.png).

These are screenshots from desktop Chrome, using an emulated phone viewport for portrait images; they are not real-phone performance measurements. The miniature office and camera remain a visual experiment. Six desks can still visually overlap at the most front-facing horizontal angles. The intentionally low-detail background buildings are partly obscured or cropped at viewport edges; eventual phone UI will consume some of the currently empty vertical screen space.
