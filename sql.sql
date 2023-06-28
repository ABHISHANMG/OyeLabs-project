SELECT c.customerId, c.name, GROUP_CONCAT(s.subjectName ORDER BY s.subjectName) AS subjects
FROM customers c
INNER JOIN mapping m ON c.customerId = m.customerId
INNER JOIN subjects s ON m.subjectId = s.subjectId
GROUP BY c.customerId, c.name
ORDER BY c.name;


-- 2. Question