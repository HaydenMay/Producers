/** Enter a fresh unguided studio in tests that exercise later game screens. */
export function enterNewStudio(){
 const guide=document.querySelector<HTMLInputElement>('#guide-choice')!;guide.checked=false;
 document.querySelector<HTMLButtonElement>('[data-main="new"]')!.click();
}
