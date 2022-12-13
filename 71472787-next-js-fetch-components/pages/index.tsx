import Head from 'next/head'
import Image from 'next/image'
import ServerBox from '../app/components/ServerBox'
import styles from '../styles/Home.module.css'
import 'server-only'

// https://beta.nextjs.org/docs/data-fetching/fetching

export default function Home() {
  return (
    <div className={styles.container}>
      <table>
        <thead>
        <tr>
          <th>server side component</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            {/* @ts-expect-error Server Component */}
            <ServerBox />
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
