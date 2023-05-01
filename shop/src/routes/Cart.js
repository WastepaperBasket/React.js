// 컴포넌트 페이지는 첫글자가 대문자로...

import { Table } from "react-bootstrap";

function Cart() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
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
