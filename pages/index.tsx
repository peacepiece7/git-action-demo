import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery } from "react-query";

import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import LectureGroup from "@/components/lecture/LectureGroup";

const Home: NextPage = () => {
  const { data, isLoading } = useQuery("lecture_list", () => fetch("http://localhost:3000/api/lectures").then((res) => res.json()));

  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>
      <Banner></Banner>

      <div title="lectureList">
        <h1>강의 목록</h1>
        <LectureGroup></LectureGroup>
      </div>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
