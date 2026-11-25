import styles from "./DownloadItem.module.css";

/**
 * Picture tile with a download link that appears on hover.
 * `file` and `preview` are paths in public/ (the files are delivered unchanged).
 */
export default function DownloadItem({
  file,
  preview,
  columns = "col-12 col-sm-6 col-lg-4",
  centered = false,
}: {
  file: string;
  preview: string;
  columns?: string;
  /** organizer page: smaller tile with margins on large screens */
  centered?: boolean;
}) {
  return (
    <div className={`${styles.downloadItem} ${columns}${centered ? ` ${styles.centered}` : ""}`}>
      <div
        className={`${styles.content} row align-items-center`}
        style={{ backgroundImage: `url("${encodeURI(preview)}")` }}
      >
        <div className={`col ${styles.linkContainer}`}>
          <div className={styles.link}>
            <a download href={file}>
              DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
