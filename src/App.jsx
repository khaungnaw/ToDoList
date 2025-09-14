import { useState, useRef } from "react";
import Item from "./Item";
import { Container } from "@mui/system";
import Header from "./Header";
import { Divider } from "@mui/material";
import Form from "./Form";

function List(props){
    return (<ul>
        {props.children}
    </ul>)
}

export default function App() {
    const inputRef = useRef();
    const [data, setData] = useState([
        { id: 3, name: "Egg", done: true },
        { id: 2, name: "Bread", done: false },
        { id: 1, name: "Butter", done: false },
    ]);

    function add(name) {
        const key = data[0].id + 1;
        if(!name) return;
        setData([{ id: key, name: name, done: false}, ...data]);
    }

    const remove = id => {
      setData(data.filter(item => item.id !== id));
    }

    const toggle = id => {
        setData(data.map(item =>{
            if (item.id === id) item.done = !item.done;
            return item;
        }))
    }

    return (
        <div>
            <Header count={data.filter(item=>!item.done).length}/>
            
            <Container maxWidth="sm" sx={{ mt: 2 }}>
                <Form add={add}></Form>
                <List>
                    {data.filter(item=>item.done==true).map(item => {
                        return <Item key={item.id} item={item} remove={remove} toggle={toggle} />;
                    })}
                </List>

                <Divider/>
                <List>
                    {data.filter(item=>item.done==false).map(item => {
                        return <Item key={item.id} item={item} remove={remove} toggle={toggle} />;
                    })}
                </List>
            </Container>

        </div>
    );
}