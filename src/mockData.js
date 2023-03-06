import { v4 as uuidv4 } from "uuid";

const mockData = [
    {
        id: uuidv4(),
        title: " 📋Por hacer",
        tasks: [{
            id: uuidv4(),
            title: "Estudiar js",
        },
        {
            id: uuidv4(),
            title: "Comer",
        },
        {
            id: uuidv4(),
            title: "Tomar cafe",
        },
        {
            id: uuidv4(),
            title: "Estudiar React",
        }]
    },
    {
        id: uuidv4(),
        title: " 📋En proceso",
        tasks: [{
            id: uuidv4(),
            title: "Estudiando js",
        },
        {
            id: uuidv4(),
            title: "Comiendo",
        },
        {
            id: uuidv4(),
            title: "Tomando cafe",
        },
        {
            id: uuidv4(),
            title: "Estudiando React",
        }]
    },
    {
        id: uuidv4(),
        title: " 📋Terminados",
        tasks: [{
            id: uuidv4(),
            title: "Estudiar js",
        }]
    },
];

export default mockData;