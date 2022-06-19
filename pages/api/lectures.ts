import type { NextApiRequest, NextApiResponse } from "next";

// curl http://localhost:3000/api/lectures

// mock data는 협업하는 동료들과 같이 검증할 것!
// category는 중복이 안되는지, isHot, isNew말고 필요한 건 없는지
const mockCategory = {
  id: 0,
  name: "프로그래밍",
};
const tags = [
  {
    id: 0,
    title: "평생소장",
  },
  {
    id: 0,
    title: "평생소장",
  },
  {
    id: 0,
    title: "평생소장",
  },
  {
    id: 0,
    title: "평생소장",
  },
];

// prettier-ignore
type Data = { 
  lectureList: { 
    id: number;
    title: string;
    category: string;
    tags: string[]; 
    description: string; 
    thumb: string; 
    isHot: boolean;
    isNew: boolean 
  }[] 
};

const lectureData = {
  lectureList: [
    {
      id: 0,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      category: "programming",
      tags: ["평생소장", "AWS", "DevOps"],
      description: "개발/운영/아키택트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 실습 중",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(lectureData);
}
