import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
    id: 'name' | 'lastName' | 'area' | 'position' | 'address' | 'phone' ;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
    }

const columns: Column[] = [
    { id: 'name', label: 'Nombres', minWidth: 100 },
    { id: 'lastName', label: 'Apellidos', minWidth: 100 },
    { id: 'area', label: 'Area', minWidth: 100 },
    { id: 'position', label: 'Posición', minWidth: 100 },
    { id: 'address', label: 'Dirección', minWidth: 100 },
    { id: 'phone', label: 'Telefono', minWidth: 100 },
];

interface Data {
    name: string;
    lastName: string;
    area: string;
    position: string,
    address: string, 
    phone: number,
}

function createData(name: string, lastName: string, area: string, position: string, address: string, phone: number): Data {
    return { name, lastName, area, position, address, phone};
}

const rows = [
    createData('Eduar', 'Callent', 'Marketing', 'Director', 'calle 4 sur', 3125685420),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        '&::webkit-scrollbar' : {
            width: '100px'
        }
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.lastName}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    );
}
