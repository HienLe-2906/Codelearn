//https://codelearn.io/learningtask/index?id=3477&taskid=3780
function chessBoardCellColor(cell1, cell2){
    var char = ['A','B','C','D','E','F','G','H'];
    var check;
    cell1 = cell1.split('');
    cell2 = cell2.split('');
    check = char.indexOf(cell1[0])+(parseInt(cell1[1])-1)+char.indexOf(cell2[0])+(parseInt(cell2[1])-1);
    if(check%2==0){
        return true;
    }
    return false;
}
//tại mỗi vị trí có hàng và cột cùng lẻ hoặc cùng chẵn thì sẽ cùng màu
//b1: khai báo mảng gồm các phần tử hàng, khai báo biến check lưu kết quả
//b2: Cắt mỗi vị trí truyền vào làm 1 mảng gồm 2 phần tử gồm chữ và số (vd A1 => ['A','1'])
//b3: lấy giá trị tổng chỉ số phần tử của mảng cell1 và mảng cell2
//nếu tổng giá trị chỉ số là chẵn thì 2 vị trí đó cùng màu và ngược lại