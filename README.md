```bash
node --experimental-repl-await
```


```javascript
db = require('./models/index.js')
t = await db.Teacher.create({ name: 'gas' })
c = await db.ClassRoom.create({ name: 'math', teacher_id: t.id})
await c.getTeacher()
q = await db.ClassRoom.findOne({ include: db.Teacher });
console.log(q.toJSON())
qt = await db.Teacher.findOne({ include: db.ClassRoom });
console.log(qt.toJSON())

s = await db.Student.create({ name: 'pimpim' })
s2 = await db.Student.create({ name: 'patpat' })

await c.setStudents([s, s2])
cs = await c.getStudents()

await c.setStudents([1])
cs2 = await c.getStudents()

sc = await s.getClassRooms()
```

