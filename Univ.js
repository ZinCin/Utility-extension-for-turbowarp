// Name: Univ
// ID: univ
// Description: Some new useful blocks.
// By: ZinCin <https://scratch.mit.edu/users/ZinCinXD/>
// License: MIT

(function (Scratch) {
  'use strict';

  const cast = Scratch.Cast;
  
  let splitCache;
  let enabledLock = false;
  
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Univ must run unsandboxed!');
  }
  
  window.addEventListener('beforeunload', (e) => {
    if (enabledLock) {
      e.preventDefault();
    }
  });

  class Univ {
    getInfo() {
      return {
        id: 'univ',
        name: 'Univ',
        color1: '#383838',

        blocks: [
		  {
            func: 'my_website',
            blockType: Scratch.BlockType.BUTTON,
            text: 'Visit my website',
          },
		  '---',
          {
            opcode: 'A_or_B_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[BOOLEAN] ? [A] : [B]',
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
            },
            allowDropAnywhere: true,
          },
          {
            opcode: 'value_in_boolean_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[VALUE]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'value_in_string_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[VALUE]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
		  {
            opcode: 'random_boolean_value',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'random',
			disableMonitor: true,
          },
		  {
            opcode: 'random_number_value',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random',
			disableMonitor: true,
          },
		  '---',
		  {
            opcode: 'more_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≥ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
            },
          },
          {
            opcode: 'less_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≤ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
            },
          },
          {
            opcode: 'not_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≠ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
            },
          },
		  {
            opcode: 'exponent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
            },
          },
		  '---',
		  {
            opcode: 'max_of',
            blockType: Scratch.BlockType.REPORTER,
            text: 'max of [A] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
            },
          },
		  {
            opcode: 'min_of',
            blockType: Scratch.BlockType.REPORTER,
            text: 'min of [A] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
            },
          },
		  '---',
		  {
            opcode: 'lettersToOf',
            blockType: Scratch.BlockType.REPORTER,
            text: 'letters [A] to [B] of [STRING]',
            disableMonitor: true,
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'replaceWords',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace first [A] with [B] in [STRING]',
            disableMonitor: true,
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'findIndexOfString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'index of [A] in [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'itemOfFromString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'item [A] of [B] split by [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '',
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
              C: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'stringToUpperCase',
            blockType: Scratch.BlockType.REPORTER,
            text: '[STRING] to uppercase',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
            },
          },
          {
            opcode: 'stringToLowerCase',
            blockType: Scratch.BlockType.REPORTER,
            text: '[STRING] to lowercase',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
		  '---',
		  {
            opcode: 'pi_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝜋',
          },
          {
            opcode: 'e_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝘦',
          },
		  {
            opcode: 'newline',
            blockType: Scratch.BlockType.REPORTER,
            text: 'newline character',
            disableMonitor: true,
          },
		  '---',
		  {
            opcode: 'alert_block',
            blockType: Scratch.BlockType.COMMAND,
		    text: 'alert [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
		  {
            opcode: 'inputPromptBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: 'prompt [STRING]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'confirmationBlock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'confirm [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
		  {
            opcode: 'comment',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [COMMENT]',
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          '---',
		  {
            opcode: 'lock',
            blockType: Scratch.BlockType.COMMAND,
            text: 'lock window',
		  },
		  {
            opcode: 'unlock',
            blockType: Scratch.BlockType.COMMAND,
            text: 'unlock window',
		  },
		  {
            opcode: 'isLock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is window lock?',
          },
		  '---',
		  {
            opcode: 'emptying',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear console',
          },
		  {
            opcode: 'consoleLog',
            blockType: Scratch.BlockType.COMMAND,
            text: 'console [DROPDOWN] [INPUT]',
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'log',
                menu: 'consoleLogMenu',
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          '---',
		  {
            opcode: 'version',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Univ',
          },
        ],
		menus: {
		  consoleLogMenu: {
            acceptReporters: true,
            items: ['debug', 'log', 'error', 'warn'],
	      }
        }
      };
    }

    my_website() {
      window.open('https://google.com/');
    }
    A_or_B_block({ BOOLEAN, VALUE1, VALUE2 }) {
      return cast.toBoolean(BOOLEAN) ? VALUE1 : VALUE2;
    }
	random_boolean_value() {
	  return Math.random() < 0.5;
	}
	random_number_value() {
	  return Math.random();
	}
    value_in_boolean_block({ VALUE }) {
      return VALUE;
    }
    value_in_string_block({ VALUE }) {
      return VALUE;
    }
	more_or_equal_block({ A, B }) {
      return cast.compare(A, B) >= 0;
    }
    less_or_equal_block({ A, B }) {
      return cast.compare(A, B) <= 0;
    }
    not_equal_block({ A, B }) {
      return cast.compare(A, B) !== 0;
    }
	exponent_block({ A, B }) {
      return Math.pow(A, B);
    }
	max_of({ A, B }) {
	  return Math.max(A, B);
	}
	min_of({ A, B }) {
	  return Math.min(A, B);
	}
	stringToUpperCase(args) {
      return args.STRING.toUpperCase();
    }
    stringToLowerCase(args) {
      return args.STRING.toLowerCase();
    }
	lettersToOf(args) {
      return args.STRING.toString().slice(args.A - 1, args.B);
    }
    replaceWords(args) {
      return args.STRING.replace(args.A, args.B);
    }
    findIndexOfString(args) {
      var input1 = args.A;
      var input2 = args.B;
      return (input2.includes(input1)) ? input2.indexOf(input1) + 1 : '';
    }
    itemOfFromString(args, util) {
      return String(args.B).split(args.C)[args.A - 1] || '';
    }
	pi_block() {
      return Math.PI;
    }
    e_block() {
      return Math.E;
    }
	comment() {
      //comment
	}
	newline() {
      return '\n';
    }
	alert_block({ TEXT }) {
	  alert(TEXT);
	}
	inputPromptBlock(args) {
      return prompt(args.STRING);
    }
    confirmationBlock(args) {
      return confirm(args.STRING);
    }
	lock() {
	  enabledLock = true;
	}
	unlock() {
	  enabledLock = false;
	}
	isLock() {
	  return enabledLock;
	}
	emptying() {
      console.clear();
    }
	consoleLog(args) {
      const input = args.INPUT;
      switch (args.DROPDOWN) {
        case 'debug': console.debug(input); break;
        case 'log': console.log(input); break;
        case 'error': console.error(input); break;
        case 'warn': console.warn(input); break;
      }
    }
	version() {
		return "2.0";
	}
  }
  Scratch.extensions.register(new Univ());
})(Scratch);