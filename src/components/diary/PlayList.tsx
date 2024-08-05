// Playlist.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface PlaylistItem {
  title: string;
  artist: string;
  date: string;
}

const PlayList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const playlist: PlaylistItem[] = [
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
    { title: '멜로다이어리', artist: '머쓱이', date: '2024.07.22' },
  ];

  const totalPages = Math.ceil(playlist.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPlaylistItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = playlist.slice(startIndex, startIndex + itemsPerPage);

    return selectedItems.map((item, index) => (
      <tr key={index}>
        <td>{item.title}</td>
        <td>{item.artist}</td>
        <td>{item.date}</td>
      </tr>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          onClick={() => handlePageChange(i)}
          isActive={i === currentPage}
        >
          {i}
        </PageNumber>
      );
    }
    return pageNumbers;
  };

  return (
    <PlaylistContainer>
      <Table>
        <thead>
          <tr className='playListHeader'>
            <th>제목</th>
            <th>가수</th>
            <th>사용 날짜</th>
          </tr>
        </thead>
        <tbody>{renderPlaylistItems()}</tbody>
      </Table>
      <Pagination>{renderPageNumbers()}</Pagination>
    </PlaylistContainer>
  );
};

export default PlayList;

const PlaylistContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Table = styled.table`
  width: 500px;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 10px;
  .playListHeader {
    border-bottom: 1px solid #ddd;
  }
  th, td {
    padding: 10px;
    border: none;
  }

`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button<{ isActive: boolean }>`
  padding: 10px;
  margin: 0 5px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#f9f9f9')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
