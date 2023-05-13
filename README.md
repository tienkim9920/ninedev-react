### useMemo
### Tính chất của useMemo

- Trả lại 1 value

- Tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render

- Caching lại giá trị return của function, mỗi lần component rerender nó sẽ kiểm tra giá trị tham số truyền mảng dependency đó có thay đổi không.

- Nếu giá trị trong mảng dependency đó không thay đổi thì return value đã caching trong memory.

- Ngược lại nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về value, sao đó caching lại value cho những lần rerender tiếp theo.


### useCallback

- Trả lại 1 function

- Tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render

- Caching lại function, mỗi lần component rerender nó sẽ kiểm tra giá trị tham số truyền mảng dependency đó có thay đổi không.

- Nếu giá trị trong mảng dependency đó không thay đổi thì return function đã caching trong memory.

- Ngược lại nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về function, sao đó caching lại function cho những lần rerender tiếp theo.