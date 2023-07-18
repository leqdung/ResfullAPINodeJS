# ResfullAPINodeJS

# dự án tạo resfull api dùng node js

# dữ liệu là file json lấy dữ liệu từ web film

# 1=> 8

- setup dự án
- tạo dataStore.json lưu dữ liệu các bộ phim
- cài nodemon,....đẩy dữ liệu ra màn hình

# 9,10,11

- xay dung movie store
- redirect / => /movies
- kiem tra tren insomnia => neu tra ve dung ra noi dung file json, neu sai thi loi server hoac code

# 12

- cach lay gia tri parameter tren url dung res.param(...)
- tra ve doi tuong co chua cac thuoc tinh la thanh phan cua param

# 13

- lay param tu nguoi dung
- lay status code cua res. thay doi status code cua res.
- dung status code de thong bao thuoc tinh url

# 14

- lay thong tin movies theo ten bang ham find roi luu ra va xuat ra ben ngoai bang ham send
- kiem tra dieu kien doi tuong chua danh sach phim neu < 1 thi xuat thong bao loi..

# 15

- su dung nodemon : npm i -g nodemon
- setup start voi nodemon

# 16

- xay dung request body
- Muốn lấy thông tin người dùng gửi lên( request body) dạng post (vì dữ liệu dạng này dùng kiểu json) yêu cầu dùng 1 middlewere
- chọn đúng type bodyParse
- lay bằng req.body
- tao phuong thuc post roi send object len server tra ve va ghi log de kiem tra

# 17

- tạo phương thức add trong class chứa moviedatga
- chỉ cần truyên 1 đối tượng movie vao ham push()
- viết api thêm vào thông qua req.body
- kiểm tra thêm item và kiểm tra lại

# 18

- khi người dùng gửi 1 request post lên server cần phải kiểm tra
- kiểm tra xem người dùng gửi film lên có đúng ko
- kiểm tra xe bộ phim đó có tồn tại hay không

# 19

- cú pháp mới của es6
- dùng assign() để sao chép đối tượng và đối tượng mới này không cùng địa chỉ đối tượng ban đầu

# 20

- dùng slide() để copy du lieu sang arr mới
- toan tu spread operator
- co the dung concat()

# 22

- kiem co ton tai bo phim khong
- neu ko ton tại thi thông báo 404
- co ton tại thì thông báo đã xóa thành công
- remove movie
- test chức năng delete trên insomina
