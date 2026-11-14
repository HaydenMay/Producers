/** A restrained in-place walk cycle; phases are radians and rotations are around local hips and shoulders. */
export function walkPose(phase:number){
 const stride=Math.sin(phase);
 return {leftLeg:stride*.48,rightLeg:-stride*.48,leftArm:-stride*.34,rightArm:stride*.34,bob:(1-Math.cos(phase*2))*.012};
}
