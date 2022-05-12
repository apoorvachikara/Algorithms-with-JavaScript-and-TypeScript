let opts = {
    retry: 4
}

function retry() {
    let count = 1;
    return async function execute(req = request, count = 1) {
        if (opts.retry >= count) {
            try {
            const res = await request();
            console.log(res);
            return res;
            } catch (e) {
                console.error(`Error: ${e}, Request count: ${count}`)
                execute(request, count + 1);
            }
            
        } else {
            return "Unable to complete... Please try again later"
        }
    }
}

const request = () => {
    return new Promise((res, rej) => {
            setTimeout(() => {
            if (Math.random() * 10 < 4) {
                res('The request is successfully completed');
            } else {
                rej('The Request is rejected or Errored');
            }
        }, 1000)
    })
}

const execute = retry();
console.log(execute(request));