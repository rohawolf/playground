// module to send slack message
/*
Attachment Formatting:

{
	"fallback": "Required text summary of the attachment that is shown by clients that understand attachments but choose not to show them.",

	"text": "Optional text that should appear within the attachment",
	"pretext": "Optional text that should appear above the formatted data",

	"color": "#36a64f", // Can either be one of 'good', 'warning', 'danger', or any hex color code

	// Fields are displayed in a table on the message
	"fields": [
		{
			"title": "Required Field Title", // The title may not contain markup and will be escaped for you
			"value": "Text value of the field. May contain standard message markup and must be escaped as normal. May be multi-line.",
			"short": false // Optional flag indicating whether the `value` is short enough to be displayed side-by-side with other values
		}
	]
}		

EX)
payload = {
   "attachments":[
      {
         "fallback":"New open task [Urgent]: <http://url_to_task|Test out Slack message attachments>",
         "pretext":"New open task [Urgent]: <http://url_to_task|Test out Slack message attachments>",
         "color":"#D00000",
         "fields":[
            {
               "title":"Notes",
               "value":"This is much easier than I thought it would be.",
               "short":false
            }
         ]
      }
   ]
}

*/
const Slack = require('slack-node');

const webhookURL = 'https://hooks.slack.com/services/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';
const slack = new Slack();

slack.setWebhook(webhookURL);

const sendTest = async (message) => {
  const payload = {
    attachments: [
      {
        fallback: 'New open TEST task [Testt]: <http://url_to_task|Test attachments>',
        pretext: 'New open TEST task [Test]: <http://url_to_task|Test attachments>',
        color: 'Warning',
        fields: [
          {
            title: 'TEST',
            value: message,
            short: false,
          }
        ]
      }
    ],
  };

  await slack.webhook(
    payload,
    (err, res) => {
      console.log(res);
    }
  );
};

module.exports = {
  sendTest,
};
