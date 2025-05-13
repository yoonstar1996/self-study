// "use client";

// import { useDraggable, useDropLine } from "@udecode/plate-dnd";
// import { useNodeId } from "@udecode/plate-node-id";
// import { MemoizedChildren, PlateElementProps } from "@udecode/plate/react";
// import { GripVertical } from "lucide-react";
// import React from "react";

// export const DraggableAboveNodes: React.FC<PlateElementProps> = (props) => {
//   const { element, children } = props;
//   const id = useNodeId(element);
//   const { handleRef, previewRef, isDragging } = useDraggable({ element });
//   const { dropLine } = useDropLine();

//   return (
//     <div className="relative group">
//       <div
//         ref={handleRef}
//         className="absolute -left-6 top-0 flex h-full items-center opacity-0 group-hover:opacity-100 cursor-grab"
//       >
//         <GripVertical className="text-gray-400 hover:text-gray-600" />
//       </div>

//       <div
//         ref={previewRef}
//         className={`${isDragging ? "opacity-50" : "opacity-100"}`}
//       >
//         <MemoizedChildren>{children}</MemoizedChildren>
//       </div>

//       {dropLine && (
//         <div
//           className={`absolute inset-x-0 h-0.5 bg-blue-500 transition-opacity
//             ${dropLine === "top" ? "-top-px" : "-bottom-px"}`}
//         />
//       )}
//     </div>
//   );
// };
