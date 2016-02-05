$values = 0.02,  0.04, 1.2, 4,   4.03,  4.03999999,  4.040001
$expected = 1,   1,     30, 100,  100,   100,         101

for($i; $i -lt $values.Length; $i++)
{

    $result = [Math]::Ceiling($values[$i]/0.04)

    if($result -ne $expected[$i])
    {
        Write-Host "$result is not $($expected[$i])"
    }
}