import { CheckCircleIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    price: { monthly: "150,000", annually: "120,000" },
    description: "기본 기능 제공",
    features: [
      "제품 5개",
      "월 100,000 트랜잭션",
      "기본적인 분석 리포트",
      "48시간 내 지원 응답",
    ],
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    price: { monthly: "300,000", annually: "240,000" },
    description: "비즈니스 성장을 위한 추가 Feature 제공",
    features: [
      "제품 25개",
      "월 250,000 트랜잭션",
      "데이터 정밀 분석 리포트",
      "24시간 내 지원 응답",
      "마케팅 자동화 솔루션 제공",
    ],
  },
  {
    name: "Ultimate",
    id: "tier-ultimate",
    href: "#",
    price: { monthly: "600,000", annually: "480,000" },
    description: "Zephyr의 모든 것을 누릴 수 있는 Plan",
    features: [
      "제품 무제한",
      "트랜잭션 무제한",
      "데이터 정밀 분석 리포트",
      "긴급 대응 서비스 제공",
      "마케팅 자동화 솔루션 제공",
      "리포트 커스터마이징",
    ],
  },
];

export default function Solution() {
  return (
    <div className="py-10">
      <div className="mx-auto px-6">
        <div className="mx-auto text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
            Solution
          </p>
        </div>
        <p className="mt-3 text-lg leading-8 text-white text-center">
          데이터의 비즈니스화,{" "}
          <span className="text-orange-500 font-semibold">Zephyr</span>와 함께
          하세요.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-orange-300 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="pt-16 lg:px-8 lg:pt-0 xl:px-14 font-sans"
              >
                <h3
                  id={tier.id}
                  className="text-base font-semibold leading-7 text-orange-500"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                    &#65510;{tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">
                    /월
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  1년 결제 시, &#65510;{tier.price.annually}
                </p>
                <a
                  aria-describedby={tier.id}
                  className="cursor-pointer mt-10 block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-background shadow-sm hover:bg-orange-300"
                >
                  Buy plan
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-white">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-300"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-orange-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
