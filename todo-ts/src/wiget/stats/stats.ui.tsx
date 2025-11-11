import type { IStatsProps } from "./stats.model";
const Stats = ({ all, active, done }: IStatsProps) => {
    return (
    <div className="stats">
        Всего: {all} / Активные: {active} / Завершенные: {done}
    </div>
    )
}
export default Stats