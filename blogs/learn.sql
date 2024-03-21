SELECT e.name
FROM Employee e
JOIN (
    SELECT managerId
    FROM Employee
    WHERE managerId IS NOT NULL
    GROUP BY managerId
    HAVING COUNT(id) >= 5
) as subquery
ON e.id = subquery.managerId;


SELECT 
    DATE_FORMAT(trans_date, '%Y-%m') as month,
    country, 
    count(*) AS trans_count,
    SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
    SUM(amount) AS trans_total_amount,
    SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM Transactions GROUP BY country, month;

SELECT DISTINCT a.num AS ConsecutiveNums
    FROM Logs a
    JOIN Logs b ON a.id = b.id - 1
    JOIN Logs c ON a.id = c.id - 2
WHERE a.num = b.num AND a.num = c.num;

SELECT
    CASE
        WHEN MOD(id, 2) = 0 THEN id - 1
        WHEN id = (SELECT MAX(id) FROM Seat) AND MOD(id, 2) != 0 THEN id
        ELSE id + 1
    END AS id,
    student
FROM Seat
ORDER BY id ASC;

SELECT * FROM 
    (
        SELECT a.id, b.student from Seat a
        JOIN Seat b 
        ON a.id = b.id - 1  
        WHERE a.id % 2 = 1
            UNION
        SELECT a.id, b.student from Seat a
        JOIN Seat b 
        ON a.id = b.id + 1  
        WHERE a.id % 2 = 0
            UNION
        SELECT * FROM Seat 
        WHERE id = (SELECT MAX(id) FROM Seat) 
        AND (SELECT MAX(id) FROM Seat) % 2 = 1
    )  AS combined
ORDER BY id;