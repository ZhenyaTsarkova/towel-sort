
// You should implement your task here.

module.exports = function towelSort(matrix) {
   if (Array.isArray(matrix)) {
      matrix.forEach((el, index) => {
         if (index % 2 === 0) { el = el }
         else { el = el.reverse() };
      });
      return matrix.flat();
   }
   else {
      return [];
   }
}
