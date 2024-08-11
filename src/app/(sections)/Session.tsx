const sessionData = [
  {
    place: "그랜드볼룸",
    sessions: [
      {
        title: "session1",
        time: "10:00 - 11:45",
        speaker: "Steven McHail",
      },
      {
        title: "session2",
        time: "13:00 - 13:45",
        speaker: "Steven McHail",
      },
      {
        title: "session3",
        time: "14:00 - 14:45",
        speaker: "Steven McHail",
      },
      {
        title: "session4",
        time: "15:00 - 15:45",
        speaker: "Steven McHail",
      },
    ],
  },
  {
    place: "아셈볼룸",
    sessions: [
      {
        title: "session1",
        time: "10:00 - 11:45",
        speaker: "Steven McHail",
      },
      {
        title: "session2",
        time: "13:00 - 13:45",
        speaker: "Steven McHail",
      },
      {
        title: "session3",
        time: "14:00 - 14:45",
        speaker: "Steven McHail",
      },
      {
        title: "session4",
        time: "15:00 - 15:45",
        speaker: "Steven McHail",
      },
    ],
  },
  {
    place: "오디토리움",
    sessions: [
      {
        title: "session1",
        time: "10:00 - 11:45",
        speaker: "Steven McHail",
      },
      {
        title: "session2",
        time: "13:00 - 13:45",
        speaker: "Steven McHail",
      },
      {
        title: "session3",
        time: "14:00 - 14:45",
        speaker: "Steven McHail",
      },
      {
        title: "session4",
        time: "15:00 - 15:45",
        speaker: "Steven McHail",
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
            <p className="text-center text-orange-500 text-2xl font-semibold mb-3">
              {placeInfo.place}
            </p>
            {placeInfo.sessions.map((session) => (
              <div
                className="mx-auto p-5 mb-5 border-orange-500 border-2 rounded"
                key={session.title}
              >
                <p className="text-orange-400 text-xl font-semibold">
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
