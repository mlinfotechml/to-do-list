import React from 'react';
import Navbar from './components/navbar';
import './style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from '@mui/icons-material/Delete';
import { Checkbox, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';



const Todolist = () => {

    const [textInput, setTextinput] = React.useState("");
    const [arr, setArr] = React.useState(JSON.parse(localStorage.getItem('listItems') || "[]"))

    const identity = new Date().getTime().toString();

    function addToDo() {
        const existingElement = arr.find((item) => { return item.name === textInput });

        if (textInput === "") {
            return alert('Please Enter your Task');
        }
        if (existingElement) {
            setTextinput("");
            return alert('Task Already Present in the List');
        }

        let newArr = [...arr, { id: identity, name: textInput, CheckedStatus: false }]
        setArr(newArr)
        localStorage.setItem('listItems', JSON.stringify(newArr));
        setTextinput("");
    }

    function clear() {
        localStorage.setItem('listItems', JSON.stringify([]));
        setArr([])
    }

    function onDelete(id) {
        setArr(arr.filter(item => item.id !== id))
        localStorage.setItem('listItems', JSON.stringify(arr.filter(item => item.id !== id)));
    }

    function onItemChecked(indexId, CheckedStatus) {
        const obj = arr.find((element) => element.id === indexId)
        obj.CheckedStatus = CheckedStatus;
        setArr([...arr])
    }

    function onDeleteAll() {
        let newArr = arr.filter(item => !item.CheckedStatus)
        setArr(newArr);
        localStorage.setItem('listItems', JSON.stringify(newArr));
    }

    return (
        <div className="main--container">
            <Navbar />

            <h1 style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>TASKS</h1>

            {/* Form */}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ textAlign: 'center', marginTop: '10px' }}>

                    <TextField
                        id="outlined-password-input"
                        label="✍ Add Tasks Here"
                        type="text"
                        value={textInput}
                        autoComplete="current-password"
                        onChange={(event) => setTextinput(event.target.value)}
                    />

                    <div>
                        <Button variant="outlined" style={{ padding: '14px 10px', marginLeft: '5px', color: 'white', border: 'none' }} onClick={addToDo}>Add</Button>
                        <Button variant="outlined" style={{ padding: '14px 10px', marginLeft: '5px', color: 'white', border: 'none' }} onClick={clear}>Clear</Button>
                        <Button variant="outlined" style={{ padding: '14px 10px', marginLeft: '5px', color: 'white', border: 'none' }} onClick={onDeleteAll}>Delete</Button>
                    </div>

                </div>
            </Box>

            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Selection</TableCell>
                            <TableCell align="center">SR No .</TableCell>
                            <TableCell align="center">Tasks</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            arr.map((element, index) => {
                                // console.log(element);
                                return (
                                    <TableRow key={index}>
                                        <TableCell align="center">
                                            <Checkbox checked={element.CheckedStatus} onChange={(e) => onItemChecked(element.id, e.target.checked)} />
                                        </TableCell>
                                        <TableCell component="th" align='center' scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="center">{element.name}</TableCell>
                                        <TableCell align="center"><i>
                                            <IconButton onClick={() => { onDelete(element.id) }}>
                                                <Delete />
                                            </IconButton>
                                        </i></TableCell>
                                    </TableRow>
                                );
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Todolist;