import styles from './layout.module.scss';
import Link from "next/link";
type LayoutProps = {
  children: any
}
export default function Layout(props: LayoutProps) {
  return(<div className={styles.container}>
    <div><Link href={'/'}>back to home</Link></div>
    {props.children}</div>);
}
