// anyAgainstAllOthers (in graph)
// returns (an array of) two points: the current one, and each one of the remaining vertices
export default function* AnyAgainstAllOthers(ary)
{
    const jMax = ary.length;
    const iMax = jMax - 1;

    for (let i = 0; i < iMax; i++)
    {
        for (let j = i + 1; j < jMax; j++)
        {
            yield [ ary[i], ary[j] ];
        }
    }
}
