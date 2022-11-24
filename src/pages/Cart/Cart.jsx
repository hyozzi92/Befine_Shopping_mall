import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import CartButton from './CartButton';
import { useDispatch, useSelector } from 'react-redux';

import { addCount, minusCount } from '../../store';

export default function SpanningTable() {
  let state = useSelector(state => {
    return state;
  });
  console.log(state, 'gg');
  let dispatch = useDispatch();

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toLocaleString()}원`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = [];
  for (let i = 0; i < state.cart.length; i++) {
    rows.push(
      createRow(state.cart[i].name, state.cart[i].count, state.cart[i].price)
    );
  }
  console.log(state, 'state');

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <BackGround component={Paper}>
      <div className="Banner">
        <p>두개이상 구매시 무료배송!!</p>
      </div>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>제품명</TableCell>
            <TableCell align="right">수량</TableCell>
            <TableCell align="right">가격(원)</TableCell>
            <TableCell align="right">합계</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    if (row.qty < 2) {
                      alert('1보다 작을수 없습니다.');
                    } else {
                      return dispatch(minusCount(i));
                    }
                  }}
                >
                  -
                </button>
                {row.qty}

                <button
                  onClick={() => {
                    return dispatch(addCount(i));
                  }}
                >
                  +
                </button>
              </TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="BtnWrap">
        <CartButton />
      </div>
    </BackGround>
  );
}
const BackGround = styled(TableContainer)`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170px;
  }
`;
