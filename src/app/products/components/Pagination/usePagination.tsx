const MAX_ITEMS = 6;

const usePagination = (pages: number, currentPage: number) => {
  let paginationIndexes = [];
  if (pages > MAX_ITEMS) {
    const currentOnLeftSide = currentPage <= pages / 2;
    const currentOnRightSide = currentPage > pages / 2;
    if (currentOnLeftSide) {
      const firstIndex = Math.max(1, currentPage - 1);
      paginationIndexes.push(
        ...Array.from({ length: 3 }, (_, i) => firstIndex + i),
        ...Array.from({ length: 3 }, (_, i) => pages - 2 + i)
      );
    } else if (currentOnRightSide) {
      const firstIndex = Math.min(pages, currentPage + 1) - 2;
      paginationIndexes.push(
        ...Array.from({ length: 3 }, (_, i) => i + 1),
        ...Array.from({ length: 3 }, (_, i) => firstIndex + i)
      );
    }
  } else {
    paginationIndexes = Array.from({ length: pages }, (_, i) => i + 1);
  }
  return { paginationIndexes };
};

export default usePagination;
