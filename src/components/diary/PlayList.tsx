import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { getPlayList } from '../../api/home.api';
import { useParams } from 'react-router-dom';

interface PlaylistItem {
  title: string;
  artist: string;
  date: string;
}

const PlayList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage: number = 5;
  const { userId } = useParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPlaylistData = async () => {
      try {
        if (userId) {
          let allMusics: PlaylistItem[] = [];
          let page = 1;
          let data;
          
          do {
            data = await getPlayList(userId, page, itemsPerPage);
            if (data && data.musics && Array.isArray(data.musics)) {
              const formattedPlaylist = data.musics.map((music: any) => ({
                title: music.title,
                artist: music.artist,
                date: new Date(music.created_at).toLocaleDateString(),
              }));
              allMusics = [...allMusics, ...formattedPlaylist];
              page++;
            }
          } while (data && data.musics && data.musics.length > 0);

          setPlaylist(allMusics);
          
          // 총 페이지 수 계산
          const totalItems = allMusics.length;
          const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
          setTotalPages(calculatedTotalPages > 0 ? calculatedTotalPages : 1);
        }
      } catch (error: any) {
        if (error.response?.status === 404) {
          setError('해당 유저를 찾을 수 없습니다.');
        } else if (error.response?.status === 500) {
          setError('서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.');
        } else {
          setError('음악 정보를 가져오는 중 오류가 발생했습니다.');
        }
        setPlaylist([]);
        setTotalPages(1);
      }
    };

    fetchAllPlaylistData();
  }, [userId]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== currentPage && pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPlaylistItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = playlist.slice(startIndex, endIndex);

    return itemsToShow.map((item, index) => (
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Table>
        <thead className='playListHeader'>
          <tr>
            <th>제목</th>
            <th>가수</th>
            <th>사용 날짜</th>
          </tr>
        </thead>
        <tbody>{renderPlaylistItems()}</tbody>
      </Table>
      <Pagination>
        <ArrowButton onClick={handlePreviousPage} disabled={currentPage === 1}>
          <IoIosArrowBack />
        </ArrowButton>
        {renderPageNumbers()}
        <ArrowButton onClick={handleNextPage} disabled={currentPage >= totalPages}>
          <IoIosArrowForward />
        </ArrowButton>
      </Pagination>
    </PlaylistContainer>
  );
};

export default PlayList;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  max-width: 700px;
  border-collapse: separate; 
  border-spacing: 0; 
  border: 1px solid ${({ theme }) => theme.color.grayDF}; 
  border-radius: 8px;
  table-layout: fixed; /* 테이블 컬럼 너비 고정 */
  .playListHeader th {
    border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
    font-family: ${({ theme }) => theme.fontFamily.kor};
  }
  th, td {
    padding: 12px 10px;
    border: none;
    font-family: ${({ theme }) => theme.fontFamily.kor};
    font-size: 14px;
    overflow: hidden; /* 텍스트가 너무 길 경우 숨김 처리 */
    text-overflow: ellipsis; /* 텍스트가 길 경우 말줄임표(...) 처리 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }
  th:nth-child(1), td:nth-child(1) {
    width: 40%; /* 제목 컬럼 너비 고정 */
  }
  th:nth-child(2), td:nth-child(2) {
    width: 30%; /* 가수 컬럼 너비 고정 */
  }
  th:nth-child(3), td:nth-child(3) {
    width: 30%; /* 사용 날짜 컬럼 너비 고정 */
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 3px 0 3px;
  border: none;
  background: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.grayblack}; 
  &:disabled {
    color: ${({ theme }) => theme.color.grayDF};
    cursor: default;
  }
`;

const PageNumber = styled.button<{ isActive: boolean }>`
  width: 28px;
  height: 28px;  
  margin: 0 5px; 
  padding-bottom: 2px;
  border: none;
  border-radius: 50px;
  background-color: ${({ isActive }) => (isActive ? ({ theme }) => theme.color.lightblue : ({ theme }) => theme.color.white )};
  color: ${({ isActive }) => (isActive ? ({ theme }) => theme.color.white : '#000')};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.lightblue30};
    color: #000;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
`;
