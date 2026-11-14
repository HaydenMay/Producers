import {describe,it,expect} from 'vitest';
import {walkPose} from '../../src/character-lab/walk';
describe('walk cycle',()=>{it('loops and moves opposite arms and legs together',()=>{const pose=walkPose(Math.PI/2),loop=walkPose(5*Math.PI/2);expect(pose.leftLeg).toBeCloseTo(-pose.rightLeg);expect(pose.leftArm).toBeCloseTo(-pose.rightArm);expect(pose.leftLeg*pose.leftArm).toBeLessThan(0);expect(loop.leftLeg).toBeCloseTo(pose.leftLeg);expect(loop.bob).toBeCloseTo(pose.bob)})});
