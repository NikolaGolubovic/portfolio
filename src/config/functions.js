export function magnetButton(mouse, setTransX, setTransY) {
  if (!mouse.x && !mouse.y) return;
  let x = -30;
  let y = -15;
  setTransX(mouse.x + x);
  setTransY(mouse.y + y);
}
export function leaveCanvas(
  refButton,
  setBaseLeftPos,
  setBaseTopPos,
  setTransX,
  setTransY
) {
  setBaseLeftPos(refButton.current.offsetLeft);
  setBaseTopPos(refButton.current.offsetTop);
  setTransX(refButton.current.offsetLeft);
  setTransY(refButton.current.offsetTop);
}

export function biggerPanoControl(
  biggerPano,
  setBiggerPano,
  setBiggerPanoBtn,
  setSmallerProjectsClassName,
  setMainProjectsClassName,
  setPanoOpacity
) {
  if (biggerPano) {
    return;
  }
  setBiggerPanoBtn(true);
  setSmallerProjectsClassName("smaller-projects down");
  setTimeout(() => {
    setMainProjectsClassName("main-projects down");
    setPanoOpacity(0);
  }, 300);
  setTimeout(() => {
    setBiggerPano(true);
    setPanoOpacity(1);
    setSmallerProjectsClassName("smaller-projects down hide");
    setMainProjectsClassName("main-projects up show");
  }, 400);
}

export function smallerPanoControl(
  biggerPano,
  setBiggerPano,
  setBiggerPanoBtn,
  setMainProjectsClassName,
  setSmallerProjectsClassName,
  setPanoOpacity
) {
  if (!biggerPano) {
    return;
  }
  setBiggerPanoBtn(false);
  setMainProjectsClassName("main-projects down");
  setTimeout(() => {
    setSmallerProjectsClassName("smaller-projects down");
    setPanoOpacity(0);
  }, 300);
  setTimeout(() => {
    setBiggerPano(false);
    setPanoOpacity(1);
    setMainProjectsClassName("main-projects down hide");
    setSmallerProjectsClassName("smaller-projects up show");
  }, 400);
}
