import './styles.css'

type Props = {
    message: string
}

export default function NotFoundText({ message }: Props) {

    return (
        <h2>{message}</h2>
    )
}