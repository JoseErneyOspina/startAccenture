import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const createData = (
    id: number,
    userName: string,
    userLastName: string,
    position: string,
    area: string,
    email: string,
    phone: string,
    address: string,
    actions: string,
) => {
    return {
        id,
        userName,
        userLastName,
        position,
        area,
        email,
        phone,
        address,
        actions,
    };
}

const UsersTable = (props: { row: ReturnType<typeof createData> }) => {

    const {row} = props;

    const data = [
        { 
            id: 1,
            userName: 'Elionor Beatriz',
            userLastName: 'Calek Cort',
            position: 'Director de arte',
            area: 'diseño',
            email: 'elio@gmail.com',
            phone: '3012567458',
            address: 'calle 4 sur 90'
        },
        { 
            id: 2,
            userName: 'Elionor Beatriz',
            userLastName: 'Calek Cort',
            position: 'Director de arte',
            area: 'diseño',
            email: 'elio@gmail.com',
            phone: '3012567458',
            address: 'calle 4 sur 90'
        },
        { 
            id: 3,
            userName: 'Elionor Beatriz',
            userLastName: 'Calek Cort',
            position: 'Director de arte',
            area: 'diseño',
            email: 'elio@gmail.com',
            phone: '3012567458',
            address: 'calle 4 sur 90'
        }
    ];

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default UsersTable;
