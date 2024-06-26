export default function TrashIcon(props: { size: number }) {
  return (
    <svg
      fill="none"
      height={props.size}
      stroke-width="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Trash Icon</title>
      <path
        d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
