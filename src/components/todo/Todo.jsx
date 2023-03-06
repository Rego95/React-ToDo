import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { Card } from "../card/Card.jsx";
import { useState } from "react";
import "./todo.scss"

export function Todo() {
  const [data, setData] = useState(mockData);
  const onDragEnd = (result) => {
    if (!result.destination) return
    const { source, destination } = result
    if(source.droppableId !== destination.droppableId) {

      const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
      const destinacionColIndex = data.findIndex(e => e.id === destination.droppableId);

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinacionColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinacionColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="todo">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="todo_section"
                ref={provided.innerRef}
              >
                <div className="todo_section_title">{section.title}</div>
                <div className="todo_section_content">
                        {section.tasks.map((task, index)=>(
                            <Draggable key={task.id}
                                 draggableId={task.id} 
                                 index={index}>
                                    {(provided, snapshot) => (
                                         <div ref={provided.innerRef}
                                         {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                            style={
                                             {...provided.draggableProps.style, opacity:snapshot.isDragging?"0.5":"1"}
                                                 }>
                                            <Card>{task.title}</Card>
                                             </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
