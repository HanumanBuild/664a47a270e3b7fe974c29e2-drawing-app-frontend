import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = '#000000';
  }, []);

  const saveDrawing = async () => {
    const canvas = canvasRef.current;
    const drawingData = canvas.toDataURL();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.DRAWING_APP_BACKEND_URL}/api/drawings`, { drawingData }, {
        headers: {
          'Authorization': token
        }
      });
      alert('Drawing saved successfully!');
    } catch (error) {
      console.error('Error saving drawing:', error);
      alert('Failed to save drawing.');
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300 mb-4"></canvas>
      <button onClick={saveDrawing} className="bg-blue-500 text-white p-2 rounded">Save Drawing</button>
    </div>
  );
};

export default DrawingCanvas;

export default DrawingCanvas;