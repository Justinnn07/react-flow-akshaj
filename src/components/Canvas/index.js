import React from "react";
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

const initialNodes = [
  {
    id: "1",
    position: { x: 900, y: 148 },
    data: { label: "Digital Image Fundamental" },
  },
  { id: "2", position: { x: 300, y: 360 }, data: { label: "Histogram" } },
  {
    id: "7",
    position: { x: 100, y: 450 },
    data: { label: "Multi-Modal(>2peaks)" },
  },
  {
    id: "8",
    position: { x: 300, y: 450 },
    data: { label: "Bi-Modal(2peaks)" },
  },
  {
    id: "9",
    position: { x: 500, y: 450 },
    data: { label: "Uni-Modal(1peak)" },
  },
  {
    id: "10",
    position: { x: 500, y: 550 },
    data: { label: "Arithemetic Operations" },
  },

  {
    id: "11",
    position: { x: 100, y: 650 },
    data: { label: "Addition" },
  },
  {
    id: "12",
    position: { x: 300, y: 650 },
    data: { label: "Subtraction" },
  },
  {
    id: "13",
    position: { x: 500, y: 650 },
    data: { label: "Divison" },
  },
  {
    id: "14",
    position: { x: 700, y: 650 },
    data: { label: "Multiplication" },
  },

  {
    id: "3",
    position: { x: 600, y: 347 },
    data: { label: "Basic Image Transformation" },
  },
  {
    id: "4",
    position: { x: 900, y: 347 },
    data: { label: "Human Visual Perception" },
  },
  {
    id: "15",
    position: { x: 900, y: 450 },
    data: { label: "Simulataneous contrast" },
  },
  {
    id: "5",
    position: { x: 1200, y: 347 },
    data: { label: "Basic Relationships b/w pixels" },
  },
  {
    id: "16",
    position: { x: 800, y: 550 },
    data: { label: "Distance Measures" },
  },
  {
    id: "17",
    position: { x: 970, y: 550 },
    data: { label: "Path" },
  },
  {
    id: "18",
    position: { x: 1130, y: 550 },
    data: { label: "Logical Operations" },
  },
  {
    id: "19",
    position: { x: 1290, y: 550 },
    data: { label: "Connectivity" },
  },
  {
    id: "20",
    position: { x: 1450, y: 550 },
    data: { label: "Neighbors of a pixel" },
  },
  {
    id: "6",
    position: { x: 1500, y: 355 },
    data: { label: "Digital Image Quality" },
  },
];

const initialEdges = [
  { id: "e1-1", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e1-5", source: "1", target: "5", animated: true },
  { id: "e1-6", source: "1", target: "6", animated: true },
  { id: "e1-7", source: "2", target: "7", animated: true },
  { id: "e1-8", source: "2", target: "8", animated: true },
  { id: "e1-9", source: "2", target: "9", animated: true },
  { id: "e1-10", source: "9", target: "10", animated: true },
  { id: "e1-11", source: "10", target: "11", animated: true },
  { id: "e1-12", source: "10", target: "12", animated: true },
  { id: "e1-13", source: "10", target: "13", animated: true },
  { id: "e1-14", source: "10", target: "14", animated: true },
  { id: "e1-15", source: "4", target: "15", animated: true },
  { id: "e1-16", source: "5", target: "16", animated: true },
  { id: "e1-17", source: "5", target: "17", animated: true },
  { id: "e1-17", source: "5", target: "18", animated: true },
  { id: "e1-17", source: "5", target: "19", animated: true },
  { id: "e1-17", source: "5", target: "20", animated: true },
];
const Canvas = () => {
  //eslint-disable-next-line
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(e) => {
          onNodesChange(e);
        }}
        onEdgesChange={(e) => {
          onEdgesChange(e);
        }}
        onConnect={(e) => {
          onConnect(e);
        }}
        onNodeDragStop={(e) => {
          console.log(e);
        }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
