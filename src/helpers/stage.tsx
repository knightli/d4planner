const stageZoom = (e: any) => {
  e.evt.preventDefault();

  const scaleBy = 1.2;
  const stage = e.target.getStage();
  const oldScale = stage.scaleX();
  const pointer = stage.getPointerPosition();

  let mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  };

  let direction = e.evt.deltaY > 0 ? -1 : 1;

  let newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

  if (newScale > 0.5 && newScale < 2) {
    stage.scale({ x: newScale, y: newScale });

    let newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.position(newPos);
    stage.batchDraw();

    return stage;
  }
};

export { stageZoom };
