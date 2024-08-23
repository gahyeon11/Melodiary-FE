import { httpClient } from './http';

export const uploadProfileImage = async (images: { file: File; filename: string }[]) => {
  const formData = new FormData();
  images.forEach(image => {
    formData.append('files', image.file); // 이미지 파일 추가
    formData.append('filenames', image.filename); // 이미지 파일명 추가
  });

  try {
    const response = await httpClient.post('/api/aws/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data.image_urls; // 서버에서 반환된 이미지 URL 배열
  } catch (error) {
    console.error('Error uploading images', error);
    throw error; // 오류 발생 시 호출한 쪽에서 처리할 수 있도록 예외를 던집니다.
  }
};

export const saveProfileImage = () => {


};