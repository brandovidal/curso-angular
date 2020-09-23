import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-goty-571d8.firebaseio.com"
});

const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({
      mensaje: "Hello from Firebase desde VSCode!"
  });
});

export const getGoty = functions.https.onRequest(async(request, response) => {
    const gotyRef = db.collection('goty');
    const docSnap = await gotyRef.get();
    const juegos = docSnap.docs.map(doc => doc.data());
    response.json(juegos);
});

// Express
const app = express();
app.use(cors({ origin:true }));

app.get('/goty', async(req, res) => {
    const gotyRef = db.collection('goty');
    const docSnap = await gotyRef.get();
    const juegos = docSnap.docs.map(doc => doc.data());
    res.json(juegos);
});

app.post('/goty/:id', async(req, res) => {
    const {id} = req.params;
    const gameRef = db.collection('goty').doc(id);
    const gameSnap = await gameRef.get();

    if (!gameSnap.exists){
        res.status(404).json({
            ok: false,
            mensaje: 'No existe el juego con el ID '+ id
        });
        return;
    }
    const game = gameSnap.data() || { votos: 0 };
    await gameRef.update({
        votos: game.votos + 1
    });
    res.json({
        ok: true,
        mensaje: 'Gracias por tu voto a ' + game.name
    });
});

export const api = functions.https.onRequest(app);
