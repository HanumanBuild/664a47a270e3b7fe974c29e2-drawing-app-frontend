import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = '#000000';
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300"></canvas>
    </div>
  );
};

export default DrawingCanvas;