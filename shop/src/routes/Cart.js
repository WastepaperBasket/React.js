// 컴포넌트 페이지는 첫글자가 대문자로...

import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let a = useSelector((state) => state.user);

  console.log(a);

  let cark = useSelector((state) => state.cark);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cark[0].id} </td>
            <td>{cark[0].name}</td>
            <td>{cark[0].count}</td>
          </tr>
          <tr>
            <td>{cark[1].id} </td>
            <td>{cark[1].name}</td>
            <td>{cark[1].count}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

/* 
<thead> 제목 뭐 등... 
*/
/* 
<tbody> 본문
*/
{
  /* 하도 햇갈리니 tr : 가로칸  */
}
{
  /* th / td 넣으면 열이 생긴다! */
}
