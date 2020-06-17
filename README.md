##  笔记
    一直未整理，比较乱

## gitignore规则

1.所有空行或者以 # 开头的行都会被 Git 忽略。

2.可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。

3.匹配模式可以以（/）开头防止递归。

4.匹配模式可以以（/）结尾指定目录。

5.要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。
### 例子
#### 忽略所有的 .a 文件
*.a

#### 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

#### 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

#### 忽略任何目录下名为 build 的文件夹
build/

#### 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

#### 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf