const sessionData = [
  {
    place: "그랜드볼룸",
    sessions: [
      {
        title: "기조 연설",
        time: "10:00 - 10:45",
        speaker: "Brandon Austin",
      },
      {
        title: "컨테이너를 활용한 우아한 데이터 처리",
        time: "11:00 - 11:45",
        speaker: "Ashley Phillips",
      },
      {
        title: "글로벌 리전 장애 조치 사례",
        time: "13:00 - 13:45",
        speaker: "Giovani Lo Celso",
      },
      {
        title: "클라우드 거버넌스와 로그 분석 혁신",
        time: "14:00 - 14:45",
        speaker: "Alfie Whiteman",
      },
      {
        title: "빅데이터 플랫폼 구축 사례",
        time: "15:00 - 15:45",
        speaker: "Alejo Veliz",
      },
    ],
  },
  {
    place: "아셈볼룸",
    sessions: [
      {
        title: "기조 연설",
        time: "10:00 - 10:45",
        speaker: "Luka Vušković",
      },
      {
        title: "무중단 운영 및 배포 자동화",
        time: "11:00 - 11:45",
        speaker: "Ezri Konsa",
      },
      {
        title: "하이브리드 MLOps",
        time: "13:00 - 13:45",
        speaker: "Youri Tielemans",
      },
      {
        title: "실시간 데이터 분석 사례",
        time: "14:00 - 14:45",
        speaker: "Lucas Digne",
      },
      {
        title: "Serverless 환경 구축",
        time: "15:00 - 15:45",
        speaker: "Kortney Hause",
      },
    ],
  },
  {
    place: "오디토리움",
    sessions: [
      {
        title: "기조 연설",
        time: "10:00 - 10:45",
        speaker: "Brandon Austin",
      },
      {
        title: "네트워크 아키텍처 최적화",
        time: "11:00 - 11:45",
        speaker: "Cody Drameh",
      },
      {
        title: "데이터 주도 기업의 디지털 혁신",
        time: "13:00 - 13:45",
        speaker: "Brenden Aaronson",
      },
      {
        title: "스마트 미디어 랩 활용 사례",
        time: "14:00 - 14:45",
        speaker: "Darko Gyabi",
      },
      {
        title: "인프라 모니터링 적용 사례",
        time: "15:00 - 15:45",
        speaker: "Ian Poveda",
      },
    ],
  },
];

export default function Session() {
  return (
    <div className="p-10">
      <div className="mx-auto text-center">
        <p className="mt-2 text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
          Session
        </p>
        <p className="mt-3 mb-5 text-lg text-white">
          <span className="text-orange-500 font-semibold">Zephyr</span>만의
          풍성한 세션과 함께하세요.
        </p>
      </div>
      <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-x-5">
        {sessionData.map((placeInfo) => (
          <div className="col-span-1" key={placeInfo.place}>
            <p className="text-center text-orange-500 text-base lg:text-2xl font-semibold mb-3">
              {placeInfo.place}
            </p>
            {placeInfo.sessions.map((session) => (
              <div
                className="mx-auto p-5 mb-5 border-orange-500 border-2 rounded"
                key={session.title}
              >
                <p className="text-orange-400 text-sm lg:text-xl font-semibold">
                  {session.title}
                </p>
                <p className="text-gray-300 text-sm">{session.time}</p>
                <p>{session.speaker}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
