const mockData = {
  cursorId: 0,
  totalCount: 0,
  activities: [
    {
      id: 1,
      userId: 101,
      title: '도쿄 타워 방문',
      description:
        '도쿄의 상징인 도쿄 타워에서 파노라마 뷰를 즐겨보세요. 낮과 저녁 모두 방문하기에 좋은 장소입니다.',
      category: '관광',
      price: 1500,
      address: '일본 도쿄도 미나토구 시바공원 4-2-8, 105-0011',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.8,
      reviewCount: 1203,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 2,
      userId: 102,
      title: '스시 만들기 체험',
      description:
        '전문 셰프와 함께하는 스시 만들기 워크숍에서 일본 전통 요리를 배워보세요.',
      category: '요리 체험',
      price: 3000,
      address: '일본 도쿄도 츄오구 긴자 5-8-9, 104-0061',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.9,
      reviewCount: 532,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 3,
      userId: 103,
      title: '하라주쿠 거리 투어',
      description:
        '도쿄의 패션과 문화를 체험할 수 있는 하라주쿠 거리 투어에 참여해보세요.',
      category: '투어',
      price: 2000,
      address: '일본 도쿄도 시부야구 진구마에 1-19-1, 150-0001',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.7,
      reviewCount: 874,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 4,
      userId: 104,
      title: '아사쿠사 절 방문',
      description:
        '도쿄에서 가장 오래된 사찰인 아사쿠사 절을 방문하고 일본 전통 문화를 경험해보세요.',
      category: '문화 체험',
      price: 0,
      address: '일본 도쿄도 다이토구 아사쿠사 2-3-1, 111-0032',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.9,
      reviewCount: 2011,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 5,
      userId: 105,
      title: '팀랩 보더리스 전시',
      description:
        '디지털 아트의 세계에 빠져들 수 있는 팀랩 보더리스 전시를 경험해보세요.',
      category: '예술 전시',
      price: 3200,
      address: '일본 도쿄도 오다이바 아오미 1-3-8, 135-0064',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.9,
      reviewCount: 1580,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 6,
      userId: 106,
      title: '신주쿠 가든 산책',
      description: '신주쿠 교엔에서 평화로운 자연을 즐기며 휴식을 취해보세요.',
      category: '자연',
      price: 500,
      address: '일본 도쿄도 신주쿠구 나이토마치 11, 160-0014',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.6,
      reviewCount: 789,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 7,
      userId: 107,
      title: '로봇 레스토랑에서 밥먹기',
      description:
        '신주쿠에서 로봇이 공연하는 독특한 레스토랑 쇼를 즐겨보세요.',
      category: '엔터테인먼트',
      price: 8500,
      address: '일본 도쿄도 신주쿠구 가부키초 1-7-1, 160-0021',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.4,
      reviewCount: 640,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 8,
      userId: 108,
      title: '오모테산도 쇼핑',
      description:
        '도쿄에서 가장 스타일리시한 쇼핑 거리 중 하나인 오모테산도에서 다양한 브랜드와 카페를 즐겨보세요.',
      category: '쇼핑',
      price: 0,
      address: '일본 도쿄도 시부야구 진구마에 4-12-10, 150-0001',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.7,
      reviewCount: 923,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 9,
      userId: 109,
      title: '디즈니랜드 도쿄',
      description: '도쿄 디즈니랜드에서 가족과 함께 즐거운 하루를 보내세요.',
      category: '테마파크',
      price: 8200,
      address: '일본 지바현 우라야스시 마이하마 1-1, 279-0031',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.9,
      reviewCount: 4500,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
    {
      id: 10,
      userId: 110,
      title: '메이지 신궁 방문',
      description:
        '도쿄의 대표적인 신사인 메이지 신궁을 방문하여 고요한 숲 속에서 일본 신토 문화를 체험해보세요.',
      category: '문화 체험',
      price: 0,
      address: '일본 도쿄도 시부야구 요요기 1-1, 151-8557',
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/7-7_1110_1727127204848.jpeg',
      rating: 4.8,
      reviewCount: 3250,
      createdAt: '2024-09-13T06:59:15.857Z',
      updatedAt: '2024-09-13T06:59:15.857Z',
    },
  ],
};

export default mockData;
