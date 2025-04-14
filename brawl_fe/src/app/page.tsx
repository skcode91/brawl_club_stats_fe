"use client";

import styles from "./page.module.css";
import useClubGetAllQuery from "@/services/api/club/useGetAllClubsQuery";

export default function Home() {
  const { data, isLoading } = useClubGetAllQuery();

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((club) => (
          <div key={club.tag} className={styles.card}>
            <p>
              {club.name} {club.tag}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
